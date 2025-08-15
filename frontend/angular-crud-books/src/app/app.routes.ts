import { Routes } from '@angular/router';
import { Index } from './book/index';
import { Create } from './book/create/create';
import { Read } from './book/read/read';
import { Edit } from './book/edit/edit';
import { Delete } from './book/delete/delete';

export const routes: Routes = [
    { path: 'book', component: Index },
    { path: 'book/create', component: Create },
    { path: 'book/read', component: Read },
    { path: 'book/edit', component: Edit },
    { path: 'book/delete', component: Delete },
    { path: '**', redirectTo: 'book' },
];
