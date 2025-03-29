
---
### Brute

- temp[] will store the non-zero 1 by 1 from arr[]
- replace the arr with temp in the front
- fill remaining with "0"

![[Pasted image 20250329115602.png|300]]

![[Pasted image 20250329115649.png|500]]


---
### Optimal 1

![[Pasted image 20250329120720.png|600]]


```cpp
vector<int> moveZeros(int n, vector<int> a) {
    int j = -1;
    //place the pointer j:
    for (int i = 0; i < n; i++) {
        if (a[i] == 0) {
            j = i;
            break;
        }
    }

    //no non-zero elements:
    if (j == -1) return a;

    //Move the pointers i and j
    //and swap accordingly:
    for (int i = j + 1; i < n; i++) {
        if (a[i] != 0) {
            swap(a[i], a[j]);
            j++;
        }
    }
    return a;
}
```

![[Pasted image 20250329120913.png|500]]


___
Parent: [[Arrays]]

Related: [[Two-pointer]]


