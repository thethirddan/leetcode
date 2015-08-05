def seven_ate9(str)
  loop do
    str.gsub!('797', '77')
    puts(str)
    break unless str.include? '797'
  end
  
  return str
end
