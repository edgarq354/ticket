<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->string('codigo',10);
            $table->string('estado',10)->default('Espera');
            $table->string('evaluacion',10)->nullable();
            $table->timestamp('fecha_creacion')->nullable();
            $table->timestamp('fecha_inicio_atencion')->nullable();
            $table->timestamp('fecha_fin_atencion')->nullable();
            $table->foreignId('caja_id')->constrained('cajas')
            ->onUpdate('cascade')->onDelete('restrict');
            $table->foreignId('atencion_id')->constrained('atencions')
            ->onUpdate('cascade')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
