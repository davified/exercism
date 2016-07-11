class Complement
  attr_accessor :dna, :rna
  @dna = ['C', 'G', 'T', 'A']
  @rna = ['G', 'C', 'A', 'U']
  @rna_array = []

  def self.of_dna(input)
    i = @dna.index(input)
    if @dna.include? input
      input == @dna[i]
      return @rna[i]
    else
      return ""
    end
  end

  def self.of_dna_string(input)
    input_array = input.split("")
    input_array.each do |nucleotide|
      if @dna.include? nucleotide
        i = @dna.index(nucleotide)
        if nucleotide == @dna[i]
          @rna_array.push(@rna[i])
        end
      else
        return ""
      end
    end
    return @rna_array.join('')
  end
end

class BookKeeping
  VERSION = 4
end
