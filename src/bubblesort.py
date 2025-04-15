def bubble_sort(arr):
    """
    Sorts a list in place using the bubble sort algorithm.

    Args:
        arr (list): The list to be sorted.

    Returns:
        list: The sorted list (for convenience, the same input list).
    """
    n = len(arr)
    for i in range(n):
        # Last i elements are already sorted
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                # Swap if the current element is greater than the next
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Example usage (remove or comment out in production)
if __name__ == "__main__":
    example = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", example)
    sorted_array = bubble_sort(example)
    print("Sorted array:", sorted_array)