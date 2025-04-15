def bubblesort(arr):
    """
    Sorts the given list in-place using bubble sort algorithm.

    Args:
        arr: list of comparable elements

    Returns:
        The sorted list (same object as input).
    """
    n = len(arr)
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr


if __name__ == "__main__":
    test_data = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", test_data)
    bubblesort(test_data)
    print("Sorted array:", test_data)