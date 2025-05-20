s=list(input().strip())
count=0
for i in range(len(s)):
  if (s[i]=='(') and (s[i+1]==')'):
    count+=2
print(count)
    