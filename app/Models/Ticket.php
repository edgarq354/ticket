<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    /** @use HasFactory<\Database\Factories\TicketFactory> */
    use HasFactory; 
    protected $fillable = [
        'id',
        'codigo',
        'estado',
        'evaluacion',
        'fecha_inicio_atencion',
        'fecha_fin_atencion',
        'caja_id',
        'atencion_id',
    ];
    public function cajas(): HasMany
    {
        return $this->hasMany(Caja::class);
    }
    public function atencions(): HasMany
    {
        return $this->hasMany(Atencion::class);
    }
}
