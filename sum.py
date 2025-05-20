with open("file.txt", "w") as f:
    f.write("Created using write mode.")

f = open("file.txt","r")
print(f.read())