class Hamming
  def self.compute(strand1, strand2)
    i = 0
    @distance = 0
    while i < strand1.length
      if strand1[i] == strand2[i]
        @distance += 1
      end
    i += 1
    end
  @distance
  end
end
