<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Atencion extends Model
{
    /** @use HasFactory<\Database\Factories\AtencionFactory> */
    use HasFactory;
    protected $fillable = [
        'atencion',
        'estado',
    ];
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }
}
