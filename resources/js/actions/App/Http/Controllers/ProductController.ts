import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/admin/products'
*/
const storef6149b186e73fa9ffc47d123382615f0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef6149b186e73fa9ffc47d123382615f0.url(options),
    method: 'post',
})

storef6149b186e73fa9ffc47d123382615f0.definition = {
    methods: ["post"],
    url: '/admin/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/admin/products'
*/
storef6149b186e73fa9ffc47d123382615f0.url = (options?: RouteQueryOptions) => {




    return storef6149b186e73fa9ffc47d123382615f0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/admin/products'
*/
storef6149b186e73fa9ffc47d123382615f0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef6149b186e73fa9ffc47d123382615f0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/admin/products'
*/
const storef6149b186e73fa9ffc47d123382615f0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef6149b186e73fa9ffc47d123382615f0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/admin/products'
*/
storef6149b186e73fa9ffc47d123382615f0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef6149b186e73fa9ffc47d123382615f0.url(options),
    method: 'post',
})

storef6149b186e73fa9ffc47d123382615f0.form = storef6149b186e73fa9ffc47d123382615f0Form
/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/products'
*/
const store431eb3176f0b3b6628922509e73230e6 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store431eb3176f0b3b6628922509e73230e6.url(options),
    method: 'post',
})

store431eb3176f0b3b6628922509e73230e6.definition = {
    methods: ["post"],
    url: '/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/products'
*/
store431eb3176f0b3b6628922509e73230e6.url = (options?: RouteQueryOptions) => {




    return store431eb3176f0b3b6628922509e73230e6.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/products'
*/
store431eb3176f0b3b6628922509e73230e6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store431eb3176f0b3b6628922509e73230e6.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/products'
*/
const store431eb3176f0b3b6628922509e73230e6Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store431eb3176f0b3b6628922509e73230e6.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProductController::store
* @see app/Http/Controllers/ProductController.php:12
* @route '/products'
*/
store431eb3176f0b3b6628922509e73230e6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store431eb3176f0b3b6628922509e73230e6.url(options),
    method: 'post',
})

store431eb3176f0b3b6628922509e73230e6.form = store431eb3176f0b3b6628922509e73230e6Form

/**
* Multiple routes resolve to \App\Http\Controllers\ProductController::store, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `store['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const store = {
    '/admin/products': storef6149b186e73fa9ffc47d123382615f0,
    '/products': store431eb3176f0b3b6628922509e73230e6,
}


/**
* @see \App\Http\Controllers\ProductController::update
* @see app/Http/Controllers/ProductController.php:0
* @route '/admin/products/{product}'
*/
export const update = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/products/{product}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ProductController::update
* @see app/Http/Controllers/ProductController.php:0
* @route '/admin/products/{product}'
*/
update.url = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }


    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        product: args.product,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::update
* @see app/Http/Controllers/ProductController.php:0
* @route '/admin/products/{product}'
*/
update.put = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ProductController::update
* @see app/Http/Controllers/ProductController.php:0
* @route '/admin/products/{product}'
*/
const updateForm = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProductController::update
* @see app/Http/Controllers/ProductController.php:0
* @route '/admin/products/{product}'
*/
updateForm.put = (args: { product: string | number } | [product: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/admin/products/{product}'
*/
const destroy87b238a5aa25582a71402331b4a5dcde = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy87b238a5aa25582a71402331b4a5dcde.url(args, options),
    method: 'delete',
})

destroy87b238a5aa25582a71402331b4a5dcde.definition = {
    methods: ["delete"],
    url: '/admin/products/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/admin/products/{product}'
*/
destroy87b238a5aa25582a71402331b4a5dcde.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return destroy87b238a5aa25582a71402331b4a5dcde.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/admin/products/{product}'
*/
destroy87b238a5aa25582a71402331b4a5dcde.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy87b238a5aa25582a71402331b4a5dcde.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/admin/products/{product}'
*/
const destroy87b238a5aa25582a71402331b4a5dcdeForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy87b238a5aa25582a71402331b4a5dcde.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/admin/products/{product}'
*/
destroy87b238a5aa25582a71402331b4a5dcdeForm.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy87b238a5aa25582a71402331b4a5dcde.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy87b238a5aa25582a71402331b4a5dcde.form = destroy87b238a5aa25582a71402331b4a5dcdeForm
/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/products/{product}'
*/
const destroy10fd0b36a14fef2f24a4e9da12196a3a = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy10fd0b36a14fef2f24a4e9da12196a3a.url(args, options),
    method: 'delete',
})

destroy10fd0b36a14fef2f24a4e9da12196a3a.definition = {
    methods: ["delete"],
    url: '/products/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/products/{product}'
*/
destroy10fd0b36a14fef2f24a4e9da12196a3a.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return destroy10fd0b36a14fef2f24a4e9da12196a3a.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/products/{product}'
*/
destroy10fd0b36a14fef2f24a4e9da12196a3a.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy10fd0b36a14fef2f24a4e9da12196a3a.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/products/{product}'
*/
const destroy10fd0b36a14fef2f24a4e9da12196a3aForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy10fd0b36a14fef2f24a4e9da12196a3a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ProductController::destroy
* @see app/Http/Controllers/ProductController.php:27
* @route '/products/{product}'
*/
destroy10fd0b36a14fef2f24a4e9da12196a3aForm.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy10fd0b36a14fef2f24a4e9da12196a3a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy10fd0b36a14fef2f24a4e9da12196a3a.form = destroy10fd0b36a14fef2f24a4e9da12196a3aForm

/**
* Multiple routes resolve to \App\Http\Controllers\ProductController::destroy, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `destroy['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const destroy = {
    '/admin/products/{product}': destroy87b238a5aa25582a71402331b4a5dcde,
    '/products/{product}': destroy10fd0b36a14fef2f24a4e9da12196a3a,
}


const ProductController = { store, update, destroy }

export default ProductController