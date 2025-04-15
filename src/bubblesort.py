def bubblesort(arr):
    """
    Sorts a list in ascending order using the Bubble Sort algorithm.

    Args:
        arr: List of elements to be sorted.

    Returns:
        A new sorted list.
    """
    n = len(arr)
    # Make a copy so we don't mutate input
    arr = arr[:]
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

if __name__ == "__main__":
    # Example usage
    example = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", example)
    sorted_example = bubblesort(example)
    print("Sorted array:  ", sorted_example)