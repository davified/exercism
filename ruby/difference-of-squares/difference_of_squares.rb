class Squares

  def self.new(x)
    @x = x
  end
  # 
  # def self.new(x)
  #
  # end

  def sum(x)
    @sum = 0
    until
      @sum > x
      @sum += x
      x += 1
    end
    return @sum
  end

  def squared_sum(x)
    @squared_sum = 0
    temp = 0
    while temp < x do
      squared_x = x ** 2
      @squared_sum += squared_x
      temp += 1
    end
    return @squared_sum
  end

  def square_of_sum
    @squared_sum - @sum
  end

  # def square_of_sum(x)
  #   temp = 0
  #   until temp > x
  #     temp++
  #   end

end
