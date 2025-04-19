<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Caja extends Model
{
    /** @use HasFactory<\Database\Factories\CajaFactory> */
    use HasFactory;
    protected $fillable = [
        'id',
        'caja',
        'estado',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }


}
