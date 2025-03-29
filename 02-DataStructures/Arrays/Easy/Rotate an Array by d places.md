
## **Brute**

```cpp
void leftRotate(int arr[], int n, int d) {
    d = d % n;  // Handle cases where d > n

    int temp[d];  // Temporary array to store first d elements

    // Step 1: Copy first d elements to temp
    for (int i = 0; i < d; i++) {
        temp[i] = arr[i];
    }

    // Step 2: Shift the remaining elements to the left
    for (int i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }

    // Step 3: Copy temp elements back to the end
    for (int i = n - d; i < n; i++) {
        arr[i] = temp[i - (n - d)];
    }
}
```


![[Pasted image 20250329113125.png|500]]
## Optimal

```cpp
void leftRotate(int arr[], int n, int d) {
    d = d % n;  // Handle cases where d > n

    // Reverse the first d elements
    reverse(arr, arr + d);

    // Reverse the remaining n-d elements
    reverse(arr + d, arr + n);

    // Reverse the whole array
    reverse(arr, arr + n);
}
```

![[Pasted image 20250329113718.png|500]]


### In case of right rotate?

```cpp
void rightRotate(int arr[], int n, int d) {
    d = d % n;  // Handle cases where d > n

    // Reverse the whole array
    reverse(arr, arr + n);
    
    // Reverse the first d elements
    reverse(arr, arr + d);

    // Reverse the remaining n-d elements
    reverse(arr + d, arr + n);

}
```


___
Parent: [[Arrays]]

Related: 
