/*
Write a function that removes each 9 that is surrounded by two 7s.
sevenAte9('79712312') => '7712312'
sevenAte9('79797') => '777'
sevenAte9('797979797') => '77777'

Input: String Output: String
*/

def seven_ate9(str)
  loop do
    str.gsub!('797', '77')
    puts(str)
    break unless str.include? '797'
  end

  return str
end
