//Write a method is_prime that takes a number num and returns true if the number is prime and false otherwise.

def is_prime(num)
  return false if num <= 1
  num_sqrt = Math.sqrt(num)

  (2..num_sqrt).each do |int|
    return false if num % int == 0
  end

  return true
end
