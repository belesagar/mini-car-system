<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Createmodel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('model', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('manufacturer_id');
            $table->string('color',50)->nullable();
            $table->string('manufacturing_year',10)->nullable();
            $table->string('registration_number',50)->nullable();
            $table->string('note',500)->nullable();
            $table->json('images')->nullable();
            $table->timestampsTz();
            // $table->timestamps('created_at')->useCurrent();
            // $table->timestamps('updated_at')->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('model');
    }
}
