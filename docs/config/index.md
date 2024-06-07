---
editLink: true
---

## Sheet Config
::: tip
Chạy `/index/config/{{page_name}}` để load cấu hình
:::

::: code-group
```js [Bộ lọc trang danh sách]
{
  "type": "autocomplete",
  "collection_danhmuc": "C_TrangThaiHoSo", 
  "group_size": "15",
  "order": { "_key": "asc" }
}
```
```js [Bộ lọc tìm nâng cao]
{
    "type": "autocomplete",
    "collection": "C_TrangThaiHoSo"
}
```
```js [Config cột table]
// Text
{ "type": "text" }
```
:::