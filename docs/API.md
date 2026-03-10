# BravUp API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All endpoints except `/auth/login` require JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## Authentication Endpoints

### Login
```
POST /auth/login
```
**Request Body:**
```json
{
  "phone": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "string",
  "member": {
    "id": "number",
    "name": "string",
    "role": "string",
    "club_id": "number",
    "unit_id": "number"
  }
}
```

---

## Clubs Endpoints

### Get All Clubs
```
GET /clubs
```

### Get Club by ID
```
GET /clubs/:id
```

### Create Club
```
POST /clubs
```
**Request Body:**
```json
{
  "name": "string",
  "church": "string",
  "city": "string",
  "state": "string",
  "logo": "string (optional)"
}
```

### Update Club
```
PUT /clubs/:id
```

### Delete Club
```
DELETE /clubs/:id
```

---

## Members Endpoints

### Get All Members
```
GET /members
```
Returns members of the authenticated user's club.

### Get Member by ID
```
GET /members/:id
```

### Create Member
```
POST /members
```
**Request Body:**
```json
{
  "name": "string",
  "phone": "string",
  "password": "string",
  "role": "string",
  "unit_id": "number (optional)"
}
```

### Update Member
```
PUT /members/:id
```

### Delete Member
```
DELETE /members/:id
```

---

## Units Endpoints

### Get All Units
```
GET /units
```

### Get Unit by ID
```
GET /units/:id
```

### Create Unit
```
POST /units
```
**Request Body:**
```json
{
  "name": "string",
  "counselor_id": "number (optional)",
  "associate_counselor_id": "number (optional)"
}
```

### Update Unit
```
PUT /units/:id
```

### Delete Unit
```
DELETE /units/:id
```

---

## Competitions Endpoints

### Get All Competitions
```
GET /competitions
```

### Get Competition by ID
```
GET /competitions/:id
```

### Create Competition
```
POST /competitions
```
**Request Body:**
```json
{
  "name": "string",
  "start_date": "date",
  "end_date": "date",
  "active": "boolean (default: true)"
}
```

### Update Competition
```
PUT /competitions/:id
```

### Delete Competition
```
DELETE /competitions/:id
```

---

## Point Types Endpoints

### Get All Point Types
```
GET /point-types
```

### Create Point Type
```
POST /point-types
```
**Request Body:**
```json
{
  "name": "string",
  "points": "number",
  "type": "positive | negative",
  "active": "boolean (default: true)"
}
```

### Update Point Type
```
PUT /point-types/:id
```

### Delete Point Type
```
DELETE /point-types/:id
```

---

## Point Records Endpoints

### Get All Points
```
GET /points
```

### Create Point Record
```
POST /points
```
**Request Body:**
```json
{
  "member_id": "number (optional)",
  "unit_id": "number (optional)",
  "competition_id": "number",
  "points": "number",
  "reason": "string (optional)"
}
```

---

## Ranking Endpoints

### Get Member Ranking
```
GET /ranking/members
```
**Query Parameters:**
- `competition_id` (optional): Filter by competition

### Get Unit Ranking
```
GET /ranking/units
```
**Query Parameters:**
- `competition_id` (optional): Filter by competition

### Get Highlights (Pathfinder of the Week)
```
GET /ranking/highlights
```

---

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "string"
}
```

### Error Response
```json
{
  "success": false,
  "message": "string",
  "error": {}
}
```

---

## Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## Example Usage

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"phone":"123456789","password":"password"}'
```

### Get Members
```bash
curl -X GET http://localhost:5000/api/members \
  -H "Authorization: Bearer <token>"
```

### Add Points
```bash
curl -X POST http://localhost:5000/api/points \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"member_id":1,"points":50,"reason":"Good performance"}'
```