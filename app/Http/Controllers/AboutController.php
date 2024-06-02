<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('About/Index');
    }


    public function customHome()
    {
        return Inertia::render('CustomPages/CustomHome');
    }

    public function customAbout(){
        return Inertia::render('CustomPages/CustomAbout');
    }


    public function customContact()
    {
        return Inertia::render('CustomPages/CustomContact');
    }


}
