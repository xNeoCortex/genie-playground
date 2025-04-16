def fizzbuzz(n):
    """
    Prints numbers from 1 to n inclusive.
    For multiples of 3, print "Fizz" instead of the number.
    For multiples of 5, print "Buzz" instead of the number.
    For multiples of both 3 and 5, print "FizzBuzz".
    """
    for i in range(1, n+1):
        output = ""
        if i % 3 == 0:
            output += "Fizz"
        if i % 5 == 0:
            output += "Buzz"
        if output == "":
            output = str(i)
        print(output)
if __name__ == "__main__":
    fizzbuzz(100)