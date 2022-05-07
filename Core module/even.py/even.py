# numbers=[]
# for number in range(1,101):
#    numbers.append(number)

# print(numbers)

# evens=[]
# for n in numbers:
#     if n%2==0:
#         evens.append(n)

#     print(evens)

# odd=[]
# for n in numbers:
#     if n%2!=0:
#         odd.append(n)

# print(odd)
import random

random_number = random.randint(0,100)
# answer=random.choice(random_number)
# print(answer)
print(random_number)
tries=5
start=True
while start:
    user=int(input('Enter Number: '))


    if user==random_number:
       print('Won')

    elif user<=random_number:
          print('Your guess is too low')

    elif user>=random_number:
            print('your guess is too high')

