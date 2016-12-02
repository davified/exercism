class Sieve
  attr_accessor :numbers

  def initialize(n)
    # super
    @n = n
    self.numbers = Array (0..@n)

  end

  def primes
    for i in numbers
    	if numbers[i] % 2 == 0
    		numbers.pop(i)
    	end
    end
    puts numbers[i]
  end
end
