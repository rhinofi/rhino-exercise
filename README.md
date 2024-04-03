# RhinoFi backend challenge

## Batching challenge

The goal of this exercise is as follows:

* Read a CSV file (check `records.csv` for format)
* Parse the records and use `SIZE_MAPPINGS` to convert each character to a weight, sum them up per row to get the total weight of the row
* Group rows sequentially by how many can fit within the `maxSize`
* First column is the `id` of the row which must be in the output

## Example

```ts
maxSize = 30
SIZE_MAPPINGS = {
  A: 4,
  B: 5,
  C: 6,
  D: 7,
}

// CSV
0,D:D:C     --> value = 20
1,B:B       --> value = 10
2,D:D:B:B   --> value = 24

// Expected result
[
  [0, 1],   --> rows 0 and 1 based on their id
  [2],
]
```
