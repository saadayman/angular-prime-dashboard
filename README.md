# Dashboard Application

A modern Angular dashboard application with user management, image upload capabilities, and MongoDB integration.

## 🚀 Features

- ✅ **Angular 20** with Server-Side Rendering (SSR)
- ✅ **User Management** with CRUD operations
- ✅ **Image Upload** with preview functionality
- ✅ **Responsive Design** with PrimeNG components
- ✅ **MongoDB Integration** for data persistence
- ✅ **Real-time Form Validation**
- ✅ **Toast Notifications** for user feedback

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **Angular CLI** (v17 or higher)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Backend Configuration

**⚠️ Important:** The application is already configured to use a deployed backend API. No additional backend setup is required!

- **Backend URL**: `https://backend-api-4kof.onrender.com/api`
- **Database**: MongoDB Atlas (already configured)
- **Image Storage**: Server-side file storage with static serving

> **Note**: The backend is deployed on a free hosting service (Render.com). The first request after inactivity may take up to **50 seconds** due to server cold start. Subsequent requests will be much faster.

### 4. Run the Application

#### Development Mode

```bash
npm run start
```

#### Production Build

```bash
npm run build
npm run serve:ssr:dashboard
```

The application will be available at `http://localhost:4200`

## 📁 Project Structure

```
dashboard/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── dashboard/          # Dashboard page
│   │   │   ├── organization/
│   │   │   │   └── users/         # User management
│   │   │   └── reports/           # Reports page
│   │   ├── shared-components/     # Reusable components
│   │   │   ├── img-uploader/      # Image upload component
│   │   │   ├── tables/            # Data tables
│   │   │   └── menu/              # Navigation menu
│   │   └── libs/                  # Global utilities
│   └── styles.scss               # Global styles
├── backend/                      # Backend server (for reference)
└── public/                       # Static assets
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve:ssr:dashboard` - Run SSR server
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🌐 API Endpoints

The application uses the following backend endpoints:

### User Management

- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Image Upload

- `POST /api/upload/image` - Upload single image
- `GET /uploads/:filename` - Access uploaded images

## 📱 User Management Features

### Creating Users

1. Navigate to **Organization > Users**
2. Click **Add New User**
3. Fill in the form:
   - **Personal Information**: Name, email, phone
   - **Image Upload**: Select profile image (optional)
   - **Role & Department**: Assign user role and department
   - **RFID Settings**: Configure RFID access (optional)
4. Click **Save User**

### Image Upload

- Supported formats: JPG, PNG, GIF, WebP
- Maximum file size: 5MB
- Images are automatically uploaded and stored on the server
- Preview functionality included

## 🎨 UI Components

### PrimeNG Components Used

- **Forms**: InputText, Dropdown, Checkbox
- **Layout**: Card
- **Data**: Table, Paginator
- **Feedback**: Toast, Message
- **Navigation**: Menu

### Styling

- **Tailwind CSS** for utility classes
- **PrimeNG Themes** for component styling
- **SCSS** for custom styles
- **Responsive Design** for mobile compatibility

## 🚀 Deployment

### Frontend Deployment

The application can be deployed to any static hosting service:

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Deploy the `dist/dashboard/browser` folder** to your hosting service

3. **Configure routing** for Angular's client-side routing

### Backend Deployment

The backend is already deployed and configured. No additional setup required.

## 🐛 Troubleshooting

### Common Issues

1. **Slow First Request**
   - This is normal due to free hosting cold start
   - Wait up to 50 seconds for the first request
   - Subsequent requests will be fast

   ```

   ```
