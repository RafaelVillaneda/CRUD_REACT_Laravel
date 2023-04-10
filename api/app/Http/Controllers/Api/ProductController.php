<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $products= Product::all();
        return $products;
    }
    //Guardar
    public function store(Request $req){
        $product=new Product();
        $product->description = $req-> description;
        $product->price = $req-> price;
        $product->stock = $req-> stock;

        $product->save();
    }

    public function show ($id){
        $product = Product::find($id);
        return $product;

    }

    public function update (Request $req, $id){
        $product=Product::findOrFail($req->id);
        $product->description = $req-> description;
        $product->price = $req-> price;
        $product->stock = $req-> stock;

        $product->save();
        return $product;
    }

    public function destroy ($id){
        $product=Product::destroy($id);
        return $product;
    }
}
