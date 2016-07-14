class Pangram
  def self.is_pangram?(string)
    clean_string = string.downcase.chars.sort.join.squeeze

    clean_string.include? 'abcdefghijklmnopqrstuvwxyz'
  end
end

# note:
# on line 3, we need to apply several methods in order for this to work. in essence, we are (i) downcasing, (ii) chars converts characters to array, (iii) sort it by ascending order, (iv) join (join array elements into string), (v) squeeze (drops duplicates which are next to each other)

# Method 2: you can also use uniq() instead.
#  clean_string = string.downcase.chars.uniq.sort.join

# Method 3: 
# def self.is_pangram? (str)
#     ('a'..'z').all? { |char| str.downcase.include?(char) }
#   end
