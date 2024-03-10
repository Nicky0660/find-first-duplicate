
def find_first_duplicate(arr):
    tracked = set()
    for item in arr:
        if item in tracked:
            return "first duplicate", item
        tracked.add(item)
    return "duplicates found:",None


print("Expecting: 3")
print("=>", find_first_duplicate([2, 1, 3, 3, 2]))

print("")

print("Expecting: None")
print("=>", find_first_duplicate([1,2,3,4]))

print("")

print("Expecting: None")
print("=>", find_first_duplicate([ "i", "*", "0", 0 ]))

print("")

print("Expecting: * ")
print("=>", find_first_duplicate(["*", 0, "n", "@", "*"]))
