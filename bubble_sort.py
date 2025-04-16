def bubble_sort(arr):
    """
    Sorts a list in place using the bubble sort algorithm.
    Args:
        arr (list): The list to be sorted.
    Returns:
        list: The sorted list.
    """
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
# Example usage:
if __name__ == "__main__":
    example = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", example)
    bubble_sort(example)
    print("Sorted array:", example)