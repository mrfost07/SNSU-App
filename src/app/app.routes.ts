import { Routes } from '@angular/router';

export const routes: Routes = [
  // ✅ Default redirect now goes to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ✅ Auth Pages
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup/signup.page').then(m => m.SignupPage),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./pages/auth/logout/logout.page').then(m => m.LogoutPage),
  },

  // ✅ Core Pages
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then(m => m.FolderPage),
  },
  {
    path: 'the-school',
    loadComponent: () =>
      import('./pages/the-school/the-school.page').then(m => m.TheSchoolPage),
  },
  {
    path: 'administration',
    loadComponent: () =>
      import('./pages/administration/administration.page').then(m => m.AdministrationPage),
  },
  {
    path: 'academics',
    loadComponent: () =>
      import('./pages/academics/academics.page').then(m => m.AcademicsPage),
  },
  {
    path: 'faculty',
    loadComponent: () =>
      import('./pages/faculty/faculty.page').then(m => m.FacultyPage),
  },
  {
    path: 'students',
    loadComponent: () =>
      import('./pages/students/students.page').then(m => m.StudentsPage),
  },
  {
    path: 'rie',
    loadComponent: () =>
      import('./pages/rie/rie.page').then(m => m.RiePage),
  },
  {
    path: 'library',
    loadComponent: () =>
      import('./pages/library/library.page').then(m => m.LibraryPage),
  },

  // ✅ Alumni Pages
  {
    path: 'alumni',
    loadComponent: () =>
      import('./pages/alumni/alumni.page').then(m => m.AlumniPage),
  },
  {
    path: 'alumni/association',
    loadComponent: () =>
      import('./pages/alumni/association/association.page').then(m => m.AssociationPage),
  },
  {
    path: 'alumni/events',
    loadComponent: () =>
      import('./pages/alumni/events/events.page').then(m => m.EventsPage),
  },
  {
    path: 'alumni/directory',
    loadComponent: () =>
      import('./pages/alumni/directory/directory.page').then(m => m.DirectoryPage),
  },

  // ✅ Campuses Pages
  {
    path: 'campuses',
    loadComponent: () =>
      import('./pages/campuses/campuses.page').then(m => m.CampusesPage),
  },
  {
    path: 'campuses/delcarmen',
    loadComponent: () =>
      import('./pages/campuses/delcarmen/delcarmen.page').then(m => m.DelcarmenPage),
  },
  {
    path: 'campuses/mainit',
    loadComponent: () =>
      import('./pages/campuses/mainit/mainit.page').then(m => m.MainitPage),
  },
  {
    path: 'campuses/malimono',
    loadComponent: () =>
      import('./pages/campuses/malimono/malimono.page').then(m => m.MalimonoPage),
  },
];
