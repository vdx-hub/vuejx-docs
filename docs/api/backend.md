# Backend
## Vuejx
::: tip
Copy curl cho vào url bar của postman để request
:::
::: code-group
```sh [reindex]
curl --location 'https://dstn.fds.vn/vuejx/' \
--header 'Content-Type: application/json' \
--data '{
    "query": "mutation reindex($collection: String, $id: String, $filter: JSON) {\n    reindex: reindex(collection: $collection, id: $id, filter: $filter)\n}",
    "variables": {
        "collection": "T_DeXuatCongBoDSTN",
        "id": "",
        "filter": {}
    }
}'
```
:::
## Magic-sheet
::: tip
Google Sheet dùng để cấu hình dự án
:::

::: code-group
```sh [Thêm dữ liệu danh mục]
# replace all with collection name if needed
curl --location 'https://cucbaoton.fds.vn/index/data/all'
```
```sh [Load config từ sheet config vào page]
# replace page_shortName
curl --location 'https://cucbaoton.fds.vn/index/config/page_shortName'
```
```sh [Sitemap]
# Tự động sinh page theo sheet
curl --location 'https://cucbaoton.fds.vn/index/sitemap/all'
```
:::