def is_prime(num)
  return false if num <= 1
  num_sqrt = Math.sqrt(num)

  (2..num_sqrt).each do |int|
    return false if num % int == 0
  end

  return true
end
