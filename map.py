from tkinter import *
from tkinter import ttk

import tkinter.font as font
import RPi.GPIO as GPIO



# Create the main window
window = Tk()

# Specify the font family, size, and weight
myFont = font.Font(family = 'Helvetica', size = 36, weight = 'normal')
# Set window title that will be shown in the title bar
window.title("Where has Justin been?")
# Set window size
window.geometry('800x400')

def close():
    GPIO.cleanup()
    window.destroy()

def test():
    print("Testing button")
    
    

    
# btn = Button(window, text="Test", font = myFont, command = test, height = 2, width = 6)

style = ttk.Style()
style.configure("BW.Button", foreground="white", background="black")

btn = ttk.Button(text="Test")

btn.pack(side = BOTTOM)

# Properly shut down the program if the user uses the "X" button on the window
window.protocol("WM_DELETE_WINDOW", close)


# Ke