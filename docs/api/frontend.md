# Frontend
## Mongodb
::: code-group
```js [searchDB]
async function searchDB (collection, id = null, filter = null, keys = null) {/*...*/}
//ví dụ
await window.searchDB('T_CanBo', user._idAccount, null, {
  columnConfig: 1
})
```

```js [processDB]
async function processDB (collection, body, filter = null, sort = null, skip = 0) {/*...*/}
await window.processDB(collection, {
  ...actionData.data, //data from action sumit
  ...window.lodash.flattenKeys(normalObject),
})
```
:::

## Elasticsearch
::: code-group
```js [searchES]
async function searchES (collection, queryES) {/*...*/}
//ví dụ
await window.searchES("T_CoQuanDonVi", {
  "size": 1,
  "query": {
    "bool": {
      "filter": {
        "match": {
          "site": "tcmt"
        }
      },
      "must": [
        {
          "bool": {
            "must": [
              {
                "match": {
                  "MaDinhDanh.keyword": 123
                }
              },
              {
                "match": {
                  "TrangThaiDuLieu.MaMuc": "02"
                }
              }
            ]
          }
        }
      ]
    }
  },
  "_source": {
    "includes": [
      "TenVietTat"
    ]
  }
})
```
```js [aggsES]
async function aggsES (collection, queryES) {/*...*/}
// ví dụ
let collection = "T_DeXuatCongBoDSTN"
let query = {
  "size": 0,
  "sort": [],
  "query": {
    "bool": {
      "filter": {
        "match": {
          "site": "dstn"
        }
      },
      "must": [
        {
          "match": {
            "TrangThaiDuLieu.MaMuc": "02"
          }
        }
      ]
    }
  },
  "aggs": {
    "groupByNamDeXuat": {
      "date_histogram": {
        "field": "NgayDeXuatCongNhan",
        "calendar_interval": "year",
        "time_zone": "+07:00",
        "min_doc_count": 1,
        "format": "yyyy",
        "order": {
          "_key": "desc"
        }
      }
    }
  }
}
let dataReport = await window.aggsES(collection, query)
```
:::

## utils
::: warning
work in process
:::

::: code-group
```js [isString]
function isString (...) {/*...*/}
//ví dụ
isString(...)
```
```js [isObject]
function isObject (...) {/*...*/}
//ví dụ
isObject(...)
```
```js [isArray]
function isArray (...) {/*...*/}
//ví dụ
isArray(...)
```
```js [has]
function has (...) {/*...*/}
//ví dụ
has(...)
```
```js [isUndefined]
function isUndefined (...) {/*...*/}
//ví dụ
isUndefined(...)
```
```js [get]
function get (...) {/*...*/}
//ví dụ
get(...)
```
```js [set]
function set (...) {/*...*/}
//ví dụ
set(...)
```
```js [isEmpty]
function isEmpty (...) {/*...*/}
//ví dụ
isEmpty(...)
```
```js [isNumber]
function isNumber (...) {/*...*/}
//ví dụ
isNumber(...)
```
```js [pickBy]
function pickBy (...) {/*...*/}
//ví dụ
pickBy(...)
```
```js [reverse]
function reverse (...) {/*...*/}
//ví dụ
reverse(...)
```
:::

::: code-group
```js [omit]
function omit (...) {/*...*/}
//ví dụ
omit(...)
```
```js [isEqual]
function isEqual (...) {/*...*/}
//ví dụ
isEqual(...)
```
```js [pad]
function pad (...) {/*...*/}
//ví dụ
pad(...)
```
```js [flattenKeys]
function flattenKeys (...) {/*...*/}
//ví dụ
flattenKeys(...)
```
```js [backward]
function backward (...) {/*...*/}
//ví dụ
backward(...)
```
```js [padTo2Digits]
function padTo2Digits (...) {/*...*/}
//ví dụ
padTo2Digits(...)
```
```js [formatDate]
function formatDate (...) {/*...*/}
//ví dụ
formatDate(...)
```
:::
::: code-group
```js [formatDateTimeX]
function formatDateTimeX (...) {/*...*/}
//ví dụ
formatDateTimeX(...)
```
```js [dateViewYear]
function dateViewYear (...) {/*...*/}
//ví dụ
dateViewYear(...)
```
```js [dateViewMonthYear]
function dateViewMonthYear (...) {/*...*/}
//ví dụ
dateViewMonthYear(...)
```
```js [dateView]
function dateView (...) {/*...*/}
//ví dụ
dateView(...)
```
```js [dateTimeView]
function dateTimeView (...) {/*...*/}
//ví dụ
dateTimeView(...)
```
:::
::: code-group

```js [timeView]
function timeView (...) {/*...*/}
//ví dụ
timeView(...)
```
```js [objectView]
function objectView (...) {/*...*/}
//ví dụ
objectView(...)
```
```js [objectViewObject]
function objectViewObject (...) {/*...*/}
//ví dụ
objectViewObject(...)
```
```js [sortObject]
function sortObject (...) {/*...*/}
//ví dụ
sortObject(...)
```
```js [jsonMapper]
function jsonMapper (...) {/*...*/}
//ví dụ
jsonMapper(...)
```
:::