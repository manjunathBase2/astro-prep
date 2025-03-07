![[Pasted image 20250306120111.png|600]]

- Similar to sorting a hand of cards (increasing order)
- j introduces the next element, while i updates the sorted subarray to be considered
- `while i>0 and A[i]>key` checks and shifts the elements to right, if sort order is invalidated

	- for loop over all elements --> `key=A[j]` 
	- while loop to check criteria and shift the elements is required
	- `A[i+1]` assignment at last for every iteration

![[Pasted image 20250306121112.png|500]]










Parent topics : [[Sorting Algorithms]]