<?php

namespace App\Form;

use App\Entity\Categoria;
use App\Repository\CategoriaRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Count;
use Symfony\UX\Autocomplete\Form\AsEntityAutocompleteField;
use Symfony\UX\Autocomplete\Form\ParentEntityAutocompleteType;

#[AsEntityAutocompleteField]
class CategoriaAutocompleteField extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'class' => Categoria::class,
            'label' => 'Cual categoria elegiras?',
            'placeholder' => 'Choose a categoria',
            'choice_label' => 'nombre',
            'multiple' => true,
            'constraints' => [
                new Count(min: 1, minMessage: 'We need to eat *something*'),
            ],

            // 'query_builder' => function(CategoriaRepository $categoriaRepository) {
            //     return $categoriaRepository->createQueryBuilder('categoria');
            // },
            //'security' => 'ROLE_SOMETHING',
        ]);
    }

    public function getParent(): string
    {
        return ParentEntityAutocompleteType::class;
    }
}
