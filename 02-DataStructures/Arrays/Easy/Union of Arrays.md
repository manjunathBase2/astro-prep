
---
### Brute

- Put the elements of both the arrays into set and then retrieve 1by1
- DO NOT use Unordered_set (random order instead of sorted)

```cpp
vector < int > FindUnion(int arr1[], int arr2[], int n, int m) {
  set < int > s;
  vector < int > Union;
  
  for (int i = 0; i < n; i++) 
    s.insert(arr1[i]);             // O(n+logn)
    
  for (int i = 0; i < m; i++)
    s.insert(arr2[i]);             // O(m+logm)
    
  for (auto & it: s)
    Union.push_back(it);
  return Union;
}
```

![[Pasted image 20250331105129.png|500]]

---
### Optimal 1 - Two pointer technique


```cpp
vector<int> FindUnion(int arr1[], int arr2[], int n, int m) {
    vector<int> Union;
    int i = 0, j = 0;

    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            if (Union.empty() || Union.back() != arr1[i])
                Union.push_back(arr1[i]);
            i++;
        } 
        else if (arr2[j] < arr1[i]) {
            if (Union.empty() || Union.back() != arr2[j])
                Union.push_back(arr2[j]);
            j++;
        } 
        else { // Both are equal, take one and move both pointers
            if (Union.empty() || Union.back() != arr1[i])
                Union.push_back(arr1[i]);
            i++; 
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < n) {
        if (Union.empty() || Union.back() != arr1[i])
            Union.push_back(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2
    while (j < m) {
        if (Union.empty() || Union.back() != arr2[j])
            Union.push_back(arr2[j]);
        j++;
    }

    return Union;
}
```

![[Pasted image 20250329160709.png|500]]

___
Parent: [[Arrays]]

Related: [[Two-pointer]]



