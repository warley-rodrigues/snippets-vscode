<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
  </head>
  <body>

    @include('view')

    @yield('name')

    @section('name') @endsection

    @url() @url('path')

    @route()

    @csrf

    @php @endphp

    @if(condition)

    @endif

    @if(!empty())

    @endif

    @foreach 
    @break
    @continue
    @endforeach

    <style>

    </style>
  </style>
</body>
</html>