class Raindrops
  def self.convert(x)
    output = ''
    output.concat('Pling') if x % 3 == 0
    output.concat('Plang') if x % 5 == 0
    output.concat('Plong') if x % 7 == 0
    output.concat(x.to_s) if output == ''
    return output
  end
end

class BookKeeping
  VERSION = 2
end
