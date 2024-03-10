import sys
sys.path.append('..')
print(sys.path)
from python.find_first_duplicate import find_first_duplicate

def test_find_first_duplicate():
    assert find_first_duplicate([2, 3, 1, 5, 4, 2]) == ('first duplicate', 2)

def test_multiple_duplicates():
    assert find_first_duplicate([2, 3, 1, 5, 4, 2, 3]) == ('first duplicate', 2)

def test_no_duplicates():
    assert find_first_duplicate([1, 2, 3, 4, 5]) == ('duplicates found:', None)
    
def test_special_characters_no_duplicate():    
    assert find_first_duplicate([ "i", "*", "0", 0 ]) == ('duplicates found:', None)

def test_special_characters_multiple_duplicates():
    assert find_first_duplicate([ "0","i", "*", "0", 1, 1 ]) == ('first duplicate', "0")

def test_special_characters_with_duplicate():
    assert find_first_duplicate([ "i", "*", "0", 0, "*" ]) == ('first duplicate', "*")
    

