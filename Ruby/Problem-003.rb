# Largest prime factor
# Problem 3
#
# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?

number=600851475143
#number=13195
#number=600851475
div_number=number
maxsize=Math.sqrt(number).to_i
puts "Maxsize: #{maxsize}"
answer=0
divisor=[]
index=0

# function to test if testNumber is prime number
def is_prime(test_number)
    j=2
    while j<test_number-1 do
      if test_number%j==0
        test_number=0
      end
      j=j+1
    end
      test_number=test_number
end

# Find divisors that are below number's square root
maxsize.times do |maxsize|
    i = maxsize+2
    while div_number%i==0
        answer=is_prime(i)
        if answer!=0
          divisor[index]=answer;
          index=index+1
          div_number=div_number/answer
        else
          break
        end
    end
end

# Check largest divisor as it can be larger than SQRT(number)
k=0
divisor.length.times do
    number=number/divisor[k]
    k=k+1
end
puts "dividors: #{divisor}"
if number==1
    answer=divisor[k-1]
else
    answer=number
end
puts "Answer is: #{answer}"

# Answer is 6857
