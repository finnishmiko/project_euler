# ProjectEuler.net
# Multiples of 3 and 5
# Problem 1
#
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.

summa=0
a=1000
#a=10
i=0
a.times do |a|
    #puts a
    if a%3==0
        summa=summa+a
        #puts a
    else
        if a%5==0
            summa=summa+a
            #puts a
        end
    end
end
puts"Answer is: #{summa}"

# answer: 233168
