<div [class.strikethrough]="product.discount > 0">
    {{ product.price | currency: '£' }}
</div>

<div [ngClass]="strikethrough: product.discount > 0">
    {{ product.price | currency: '£' }}
</div>

These do the same thing, will apply the class if truthy