import pyautogui as gui
import time
m=input("enter a message:")
n=input('total number:')
time.sleep(2)
for i in range(int(n)):
  gui.typewrite(m)
  gui.press('Enter')
  