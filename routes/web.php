<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SendEmailController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    $projects = json_decode(File::get(base_path('projects.json')), true, JSON_UNESCAPED_SLASHES);
    $ownProjects = json_decode(File::get(base_path('own-projects.json')), true, JSON_UNESCAPED_SLASHES);
//    foreach($projects as $project) {
//        if(str_contains($project['url'], 'laravel.cloud')) {
//            defer(function () use ($project) {
//                return Http::get($project['url']);
//            });
//        }
//    }

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'projects'  => $projects,
        'ownProjects'  => $ownProjects
    ]);
})->name('welcome');

Route::get('/projects', function () {
    return Inertia::render('Projects', [
        'projects'  => json_decode(File::get(base_path('projects.json')), true, JSON_UNESCAPED_SLASHES),
    ]);
})->name('projects');

Route::get('/side-projects', function () {
    return Inertia::render('SideProjects', [
        'ownProjects'  => json_decode(File::get(base_path('own-projects.json')), true, JSON_UNESCAPED_SLASHES)
    ]);
})->name('side-projects');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/emails/store', SendEmailController::class)->name('sendEmail');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
