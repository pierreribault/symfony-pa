<?php

namespace App\Twig;

use Doctrine\Common\Collections\Collection;
use Symfony\Component\Config\Definition\Exception\Exception;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use function Symfony\Component\String\u;

class DynamicFieldExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('dynamic_field', [$this, 'render']),
        ];
    }
    public function render( $object, string $field)
    {
        $method = "get".u($field)->title();

        if (strpos($field, "is") === 0 && strpos($field, 'is') !== false){
            $method = $field;
        }

        $value = "";

        if (gettype($object) == "object"){
            if (method_exists($object, $method)){
                $value = $object->$method();

                if ($value instanceof \DateTimeInterface){
                    $value = $value->format("Y-m-d");
                }elseif (is_bool($value)){
                    $value = $value ? "Yes" : "No";
                }elseif ($value instanceof Collection){
                    $value = implode(",", $value->toArray());
                }elseif (gettype($value) == "array"){
                    $value = implode(",", array_values($value));
                }
            }else{
                throw new Exception("Method not exist $field");
            }
        }elseif (gettype($object) == "array"){
            $value = $object[$field];
        }

        return $value;
    }
}
