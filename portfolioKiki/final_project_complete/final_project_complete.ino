//final project complete
#define BLYNK_TEMPLATE_ID "TMPL61rh-Hu1f"
#define BLYNK_TEMPLATE_NAME "Quickstart Template"
#define BLYNK_AUTH_TOKEN "EnE2U6e2exjEDehN7QEo1wahJW6qRols"

#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char ssid[] = "Warachaya";
char pass[] = "25933150247";

#define IRsensorL D1  //in
#define IRsensorR D0  //out

#define LED1 D4

int IRValueL, IRValueR;
int count = 0;  
bool manualOverride = false;  // Flag for manual control
BlynkTimer timer;

WidgetLED led1(V1);  // Define LED Widget on Virtual Pin V1

void setup() {
  pinMode(LED1, OUTPUT);
  pinMode(IRsensorL, INPUT);
  pinMode(IRsensorR, INPUT);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(1000L, checkMotion);
  Blynk.syncVirtual(V1);

  Serial.begin(115200);  // Start serial communication at 115200 baud rate
}

void loop() {
  Blynk.run();
  timer.run();
}

void checkMotion() {
  if (manualOverride) return;  // Skip motion detection when manually controlled

  IRValueR = digitalRead(IRsensorR);
  IRValueL = digitalRead(IRsensorL);

  // out
  if (IRValueR == 1 && IRValueL == 0) {
    delay(500);  // Debounce delay
    if (digitalRead(IRsensorL) == 1) {
      count--;
      if (count < 0) count = 0;  
      Blynk.virtualWrite(V2, count);
    }
  }
  // in
  else if (IRValueR == 0 && IRValueL == 1) {
    delay(500);  // Debounce delay
    if (digitalRead(IRsensorR) == 1) {
      count++;
      Blynk.virtualWrite(V2, count);
    }
  }
  updateLED();
  digitalWrite(V2, count);
}

void updateLED() {
  if (count == 0) {
    digitalWrite(LED1, LOW);
    led1.off();  // Turn off LED Widget
  }else {
    digitalWrite(LED1, HIGH);
    led1.on();  // Turn on LED Widget
    delay(500);
  }

  Serial.print("Current count: ");  // Print current count to Serial Monitor
  Serial.println(count);
  Blynk.virtualWrite(V2, count);
}

BLYNK_WRITE(V1) {
  int ledControl = param.asInt();  // 0 = ปิด, 1 = เปิด
  digitalWrite(LED1, ledControl);  // ควบคุมสถานะ LED

  if (ledControl == 0) {
    manualOverride = false;  // ยกเลิกการควบคุมด้วยมือเมื่อไฟปิด
    count = 0;  // รีเซ็ตค่า count เมื่อปุ่มถูกกดเป็น "ปิด"
    Blynk.virtualWrite(V2, count);  // อัพเดทค่า count บน Blynk
    updateLED();  // อัพเดทสถานะ LED บน Blynk และอุปกรณ์
  } else {
    manualOverride = true;  // เปิดการควบคุมด้วยมือเมื่อไฟเปิด
  }

  Serial.print("LED control changed: ");
  Serial.println(ledControl);
  Serial.print("Current count reset to: ");
  Serial.println(count);
}
