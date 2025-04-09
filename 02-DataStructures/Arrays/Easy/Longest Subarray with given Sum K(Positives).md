
>Subarray: Contiguous part of the array

Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

---
### Brute

- Generate all subarrays and check individually
- maintain the sum variable as u generate

```cpp
int getLongestSubarray(vector<int>& a, long long k) {
    int n = a.size(); // size of the array.

    int len = 0;
    for (int i = 0; i < n; i++) { // starting index
        long long s = 0; // Sum variable
        for (int j = i; j < n; j++) { // ending index
            // add the current element to
            // the subarray a[i...j-1]:
            s += a[j];

            if (s == k)
                len = max(len, j - i + 1);
        }
    }
    return len;
}
```

![[Pasted image 20250402103329.png|444]]


---
### Optimal 1


```cpp

```






