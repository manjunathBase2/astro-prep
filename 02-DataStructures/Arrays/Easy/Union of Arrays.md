
---
### Brute

- Put the elements of both the arrays into set and then retrieve 1by1
- DO NOT use Unordered_set (random order instead of sorted)

```cpp
vector < int > FindUnion(int arr1[], int arr2[], int n, int m) {
  set < int > s;
  vector < int > Union;
  for (int i = 0; i < n; i++)
    s.insert(arr1[i]);
  for (int i = 0; i < m; i++)
    s.insert(arr2[i]);
  for (auto & it: s)
    Union.push_back(it);
  return Union;
}
```

#### **1️⃣ Time Complexity Analysis**

| **Operation**                                               | **Complexity** |
| ----------------------------------------------------------- | -------------- |
| **Inserting `n` elements** from `arr1[]` into `set`         | **O(n log n)** |
| **Inserting `m` elements** from `arr2[]` into `set`         | **O(m log m)** |
| **Iterating through the set** (at most `O(n + m)` elements) | **O(n + m)**   |

**Overall Complexity:**

O(nlog⁡n+mlog⁡m)

👉 **The logarithmic factor comes from `set.insert()`, which maintains elements in sorted order.**

---

#### **2️⃣ Space Complexity Analysis**

|**Component**|**Space Complexity**|
|---|---|
|`set<int> s` (stores unique elements from both arrays)|**O(n + m)**|
|`vector<int> Union` (stores final output)|**O(n + m)**|

**Overall Space Complexity:**

O(n+m)

👉 **Uses extra space due to `set` storage** (not an in-place solution).

---

#### **3️⃣ Alternative Approaches**

|**Approach**|**Time Complexity**|**Space Complexity**|**Notes**|
|---|---|---|---|
|**Sorting + Merging (Two-Pointer Technique)**|**O(n log n + m log m)**|**O(1) (In-place possible)**|If arrays are not sorted|
|**Hashing (Using `unordered_set`)**|**O(n + m)** (average)|**O(n + m)**|Faster insertions but no ordering|

👉 **Using `unordered_set` instead of `set` gives better average-case performance but loses sorted order.**


---
### Optimal 1


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



