# Pet Store Containers

## Backend

```mermaid
C4Component
  SystemBoundary(PetStoreAPI, "Pet Store API") {
    Container(UserManagement, "User Management", "Handles user operations such as registration, authentication, profile management.")
    Container(OrderProcessing, "Order Processing", "Manages order placement and tracking.")
    Container(InventoryMgmt, "Inventory Management", "Includes pet listings, inventory updates, and search functionalities.")
  }
```